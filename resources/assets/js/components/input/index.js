/**
 *
 * How to use:
 *
 * 1) Add inputMutations mutations to your vuex store:
 *
 *      ,...inputMutations,
 *
 * 2) Add this inputStateVariables to your vuex store initial state
 *
 *      ,...inputStateVariables,
 *
 * 3) In your action reset inputs or add validation errors:
 *
 * axios.post(/some-url', yourStore.inputs).then((response) => {
 *      //something what you want
 *      //then reset data of inputs
 *      context.commit(RESET_INPUTS_MUTATION)
 * }).catch((error) => {
 *    //catch the laravel validation response, just to add this:
 *    context.commit(UPDATE_INPUTS_ERRORS_MUTATION, error)
 * })
 *
 * 4) In your component template:
 *
 *      <simple-input type="password" placeholder="Enter your password" name="password" store="User"></simple-input>
 *
 * 5) In your component:
 *
 *      import { RESET_INPUTS_MUTATION } from 'components/input'
 *
 *      //...
 *
 *      beforeRouteLeave (to, from, next) {
 *          this.$store.commit('Your_store/' + RESET_INPUTS_MUTATION)
 *          next()
 *      },
 *
 * 6) PROFIT!
 *
 */

/**
 * Process response in error case
 * @type {string}
 */
export const UPDATE_INPUTS_ERRORS_MUTATION = 'UPDATE_INPUTS_ERRORS_MUTATION'

/**
 * Update value of input in the store after type
 * @type {string}
 */
export const UPDATE_INPUT_MUTATION = 'UPDATE_INPUT_MUTATION'

/**
 * Reset inputs data after end of work with component
 * @type {string}
 */
export const RESET_INPUTS_MUTATION = 'RESET_INPUTS_MUTATION'

/**
 * Set method for post requests
 * @type {string}
 */
export const SET_METHOD_FIELD_MUTATION = 'SET_METHOD_FIELD_MUTATION'

/**
 * Add this mutations to your vuex store
 *
 * @type {{[UPDATE_INPUTS_ERRORS_MUTATION]: ((state, error)), [UPDATE_INPUT_MUTATION]: ((state, input))}}
 */
export let inputMutations = {
     [UPDATE_INPUTS_ERRORS_MUTATION] (state, error) {
         state.inputsErrors = error.response.data
     },
     [UPDATE_INPUT_MUTATION] (state, input) {
         state.inputs[input.name] = input.value
     },
     [SET_METHOD_FIELD_MUTATION] (state, method) {
         state.inputs['_method'] = method
     },
     [RESET_INPUTS_MUTATION] (state) {
         state.inputs = {}
         state.inputsErrors = {}
     },
}

/**
 * Add this variables to your vuex store initial state
 *
 * @type {{inputs: {}, inputsErrors: {}}}
 */
export let inputStateVariables = {
    inputs: {},
    inputsErrors: {},
}