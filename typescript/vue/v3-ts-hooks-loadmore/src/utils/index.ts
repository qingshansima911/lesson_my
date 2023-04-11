export const arrToObj = <T extends { _id?: string }>(arr: Array<T>) => {
    return arr.reduce((prev, current) => {
        if (current._id) {
            prev[current._id] = current
        }
        return prev
    }, {} as { [key: string]: T })
}

export const objToArr = <T>(obj: { [key: string]: T }) => {
    return Object.keys(obj).map(key => obj[key])
}

export enum StorageType {
    Local = 'Local',
    Session = 'Session'
}
export class StorageHandler {
    setItem(type: StorageType, key: string, value: string) {
        if (type === StorageType.Local) {
            localStorage.setItem(key, value)
        } else {
            sessionStorage.setItem(key, value)
        }
    }
    getItem(type: StorageType, key: string) {
        if (type === StorageType.Local) {
            if (localStorage.getItem(key)) {
                return localStorage.getItem(key)
            }
        } else {
            if (sessionStorage.getItem(key)) {
                return localStorage.getItem(key)
            }
        }
    }
    remove(type: StorageType, key: string) {
        if (type === StorageType.Local) {
            if (localStorage.getItem(key)) localStorage.removeItem(key)
        } else {
            if (sessionStorage.getItem(key)) sessionStorage.removeItem(key)
        }
    }
    clear(type: StorageType) {
        if (type === StorageType.Local) {
            localStorage.clear()
        } else {
            sessionStorage.clear()
        }
    }
}
export const storageType = StorageType.Local
