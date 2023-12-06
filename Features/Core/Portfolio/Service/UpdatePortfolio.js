const asyncHandeler = require('express-async-handler');
const Portfolio = require('../../../../Models/Portfolio');
const Component = require('../../../../Models/Component');
const PortfolioComponent = require('../../../../Models/PortfolioComponent');

exports.updateUserPortfolio = asyncHandeler(async (req, res, next) => {
    const userModel = res.locals.userModel;
    const {
        inner: components,
        toDelete: toDelete,
    } = req.body.chosen;

    const portId = req.params.id;

    if (portId == null) {
        return res.sendStatus(400);
    }
    const port = await Portfolio.findById(portId);
    if (port == null || port.userId != userModel.id) {
        return res.sendStatus(400);
    }

    
    if (components.length + port.components.length - toDelete.length > 10) {
        return res.sendStatus(401);
    }



    const compsMap = {};
    for (let i = 0; i < components.length; i++) {
        const cmp = components[i];
        if (compsMap[cmp] == null) {
            compsMap[cmp] = [i];
        } else {
            compsMap[cmp].push(i);
        }
    }

    const compsModel = await Component.find({
        '_id': {
            $in: Object.keys(compsMap),
        }
    });
    const compsObjects = new Array(components.length);
    for (const [key, value] of Object.entries(compsMap)) {
        for (const idx of value) {
            for (const obj of compsModel) {
                if (obj._id == key) {
                    compsObjects[idx] = obj;
                    break;
                }
            }
        }
    }


    let i = 0;
    const finalComponents = compsObjects.map((cmp) => {
        i++;
        return {
            portfolioId: portId,
            parentId: cmp._id,
            userId: userModel.id,
            name: `Component #${i}`,
            settings: cmp.defaultSettings,
        };
    });
    const portComps = await PortfolioComponent.insertMany(finalComponents);
    if (toDelete != null) {
        await PortfolioComponent.deleteMany({
            '_id': {
                $in: toDelete,
            },
            userId: userModel.id,
            portfolioId: port._id,
        });
    }
    
    
    for (let idx = 0; idx < port.components.length; idx++) {
        
        if (toDelete.includes(port.components[idx]._id.toString())) {
            port.components.splice(idx, 1);
            idx--;
        }
    }

    port.components.push(...portComps.map(obj => obj._id));
    
    
    await port.save(); 
     
    res.status(200).json({
        portComps: portComps || [],
    })
});