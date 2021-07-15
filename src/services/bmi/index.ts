/**
 * Service class for BMI API. 
 */

interface countOverWeightPeopleType {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
}
export default class BMIService {

    /**
     * Method to check the over weight condition.
     * @param {number} BMI
     * @returns {boolean}
     */
    private static checkOverWeightCondition(BMI: number): boolean {
        if (BMI >= 25 && BMI <= 29.9) {
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {countOverWeightPeopleType} data
     * @returns {number}
     */
    private static calculateBMI(data: countOverWeightPeopleType): number {
        return (data.WeightKg/Math.pow(data.HeightCm/100, 2));
    }
    
    /**
     * Method to count the number of overweight people.
     * @param {countOverWeightPeopleType[]} data
     * @returns {any}
     */
    public static countOverWeightPeople(data: countOverWeightPeopleType[]): any {
        try {
            let numberOfOverWeightPeople: number = 0;
            if (data.length == 0) {
                return numberOfOverWeightPeople;
            }
            data.forEach((value: countOverWeightPeopleType, index: number) =>{
                const BMI: number = BMIService.calculateBMI(value);
                if (BMIService.checkOverWeightCondition(BMI)) {
                    numberOfOverWeightPeople++;
                }

                if (index == data.length - 1) {
                    return numberOfOverWeightPeople;
                }
            });
        } catch (err) {
            throw new Error(`Error in encounter in BMI service.`);
        }
    } 

}