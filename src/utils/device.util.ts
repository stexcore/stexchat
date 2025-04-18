import * as uuid from "uuid";

let id_app_device_data: string | null = localStorage.getItem("stexcore__id_app_device");

if (!id_app_device_data) {
    localStorage.setItem("stexcore__id_app_device", id_app_device_data = uuid.v4());
}

export default {

    get id_app_device_data() {
        return id_app_device_data;
    }

}