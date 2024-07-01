class CreateNewCarRequest {
    model: string
    year: number
    color: string
    isActive: boolean
    owner: string
    licensePlate: string


    constructor(model = '', year = 0, owner = '', color = '', isActive: boolean = false,licensePlate='') {
        this.model = model
        this.year = year
        this.color = color
        this.isActive = isActive
        this.owner = owner
        this.licensePlate = licensePlate
    }
}

export default CreateNewCarRequest