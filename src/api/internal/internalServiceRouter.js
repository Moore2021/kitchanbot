class internalServiceRouter {
    async post(service, data) {
        try {
            let module = require(`../service/${service}`);
            const id = await module[data.request](data.body);
            console.log(`${id}`);
        } catch (err){
            console.error(err);
        }
    }
}

module.exports = new internalServiceRouter();
