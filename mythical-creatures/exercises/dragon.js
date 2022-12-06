class Dragon {
    constructor (name, rider, hungry) {
        this.name = name;
        this.rider = rider;
        this.hungry = hungry; {
            if (hungry === hungry) {
                this.hungry = true
            }
        }
    }

    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        if (this.hungry === true) {
            return false
        }
    }
}


module.exports = Dragon;