import Vue from 'vue'
import Employee from '@/components/Employee'
// import { mutations } from '@/components/store/index'
// import { getters } from '@/components/store/index'


describe('Employee.vue', () =>{

    it('should have an employee object', () =>{
        const Component = Vue.extend(Employee)
        const vm  = new Component().$mount()
        expect(vm.employee).to.be.an('object')
    })

})
// describe('getters', () => {
//     it('should calculate net Income to be 85% of gross', () => {
//         const state = {
//             employees: [
//                 {id:'EK0', fname:'Test', lname:'Name', job:'Tester', income:'12300'}
//             ]
//         }
//         expect(getters.netIncome(state).netIncome).to.equal(Math.round(getters.netIncome(state).income * 85)/100)
//     })
// })
//
// describe('mutations', () => {
//     it('should add a new employee object', () => {
//         const state =  {
//             employees: []
//         }
//         mutations.addEmployee(state, {id:'EK0', fname:'Test', lname:'Name', job:'Tester', income:'12300'})
//         expect(state.employees.length).to.equal(1)
//     })
// })