import { LocalStorage, } from '../storage';

export const permissionDirective = () => {
    Vue.directive('permission', {
        bind(el, binding) {
            const authCodeList = LocalStorage.getAuthCodeList();
            const permission = !(authCodeList.length > 0 && authCodeList.includes(binding.value));
            if (permission) {
                el.classList.add('permission-disabled');
                el.setAttribute('disabled', 'disabled');
                el.addEventListener('click', (event)=>{
                    event && event.stopImmediatePropagation();
                }, true);
            }
        },
    });
};

export function hasPermission(authName) {
    const authCodeList = LocalStorage.getAuthCodeList()|| [];
    return !(authCodeList.length > 0 && authCodeList.includes(authName));
}
