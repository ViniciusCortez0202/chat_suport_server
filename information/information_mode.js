export function Enterprise(data, socket) {

    var enterpriseInformation = {
        cnpj: data.cnpj,
        socket: socket,
        cargo: data.cargo,
        idEnterprise: data.idEnterprise,
        clientName: data.clientName,
        img: data.img
    }

    return { enterpriseInformation }
}


export function Suport(data, socket) {

    var suportInformation = {
        socket: socket,
        level: data.level,
        idSuport: data.idSuport,
        surpotName: data.suportName,
        img: data.img
    }

    return { suportInformation }

}