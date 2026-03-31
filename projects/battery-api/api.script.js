class batteryListener extends EventTarget {
    constructor() {
        super()
        this.level = 0
        this.levelfloat = 0;
        this.charging = false;
        navigator.getBattery().then((battery) => {
            this.level = Math.ceil(battery.level * 100);
            this.charging = battery.charging;
            this.levelfloat = battery.level;
            this.dispatchEvent(new CustomEvent("levelupdate"));
            this.dispatchEvent(new CustomEvent("chargeupdate"));
            battery.addEventListener("levelchange", () => {
                this.levelfloat = battery.level;
                this.level = Math.ceil(battery.level * 100);
                this.dispatchEvent(new CustomEvent("levelupdate"));
            });
            battery.addEventListener("chargingchange", () => {
                this.charging = battery.charging;
                this.dispatchEvent(new CustomEvent("chargeupdate"));
            })
        });
    }


}
