export default class HousePar {
    constructor(houseSize, xpRates, houseImages){
        this.houseImages = houseImages;
        this.houseSize = houseSize;
        this.xpRates = xpRates;
        this.xp = 0;
        this.currentSize = 0;
        this.xpNext = xpRates[this.currentSize + 1];
        this.currentHouse = houseSize[this.currentSize];
    }

    fire = {
        percent: 100,
        getRate: () =>{
            return (this.currentSize * 2) + 1;
        },
    }

    //Getters
    xpReturnDisplay(){
        return String(this.xp + "/" + this.xpNext);
    }

    getCurrentHouse(){
        return this.currentHouse = this.houseSize[this.currentSize];
    }

    //Add
    addXp(account){
        this.xp = this.xp + account.influence;
    }

    //Use
    useXp(ammount){
        this.xp = this.xp - ammount;
    }

    //Updates
    updateXP(account){
        this.xp = (this.xp + account.influence) + 1;
		if(this.xp >= this.xpNext){
			this.currentSize = this.currentSize + 1;
			this.xpNext = this.xpRates[this.currentSize];
			this.currentHouse = this.houseSize[this.currentSize];
		}
    }

    updateImage(){
        return String(this.houseImages[this.currentSize]);
    }

    updateFire(document){
        this.fire.percent = this.fire.percent - this.fire.getRate();
		if (this.fire.percent == 10){
			alert("The fire is running out!");
		}
		document.getElementById("#fireProgressBar").style.width = this.fire.percent + "%";
    }

    updateOne(){
        this.xpReturnDisplay();
    }

    updateTen(account, document){
        this.updateImage();
        this.updateFire(document);
        this.updateXP(account);
    }
}