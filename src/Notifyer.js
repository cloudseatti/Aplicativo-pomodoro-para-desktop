const Notifyer = {
    async init()  {
        const permission = await Notification.requestPermission()
        if(permission !== "granted"){
            throw new error('Permissao negada')
        }
        console.log(permission)
    },
    notify(){}
}

export { Notifyer }