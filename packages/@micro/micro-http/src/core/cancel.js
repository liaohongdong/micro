let axiosCancelList = []

export const addAxiosCancel = (val) => {
    if (!axiosCancelList.some(i => i.url === val.url)) {
        axiosCancelList.push(val);
    }
}

export const clearAxiosCancel = () => {
    axiosCancelList.forEach(val => {
        val.cancel && val.cancel();
    });
    axiosCancelList = [];
}