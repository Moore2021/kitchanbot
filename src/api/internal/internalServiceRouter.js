class internalServiceRouter {
    async post(service, data) {
        try {
            let module = await import(`../service/${service}.js`);
            const id = await module[data.request](data.body);
            console.log(`${id}`);
        } catch (err){
            console.error(err);
        }
    }
}

export default new internalServiceRouter();
