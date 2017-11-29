import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        employees:[
            {id: 'EK1', fname: 'John', lname: 'Doe', job: 'Developer', income: 12345 }
            ]
    },

    getters:{
        netIncome: state => {
            var taxedEmployee = state.employees.map(employee =>{
                return {
                    id: employee.id,
                    fname: employee.fname,
                    lname: employee.lname,
                    job: employee.job,
                    income: employee.income,
                    netIncome: Math.round(employee.income * 85)/100
                }
            });
            return taxedEmployee;
        }
    },

    mutations:{
        addEmployee: (state, employee) => {
            var newEmployee = state.employees.push({
                id: employee.id,
                fname: employee.fname,
                lname: employee.lname,
                job: employee.job,
                income: employee.income
            });
            return newEmployee;
        }
    }
})