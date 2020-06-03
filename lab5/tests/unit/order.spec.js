import {shallowMount, createLocalVue} from "@vue/test-utils";
import Order from "../../src/components/Order";

let wrapper;

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: 'admin'
    },
})


describe('Order.vue', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        wrapper = shallowMount(Order, {
            localVue,
            router,
            stubs: ['router-link']
        })
    })


    it('Check if form is submitted', () => {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('.submit').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    })

    it("Check for correctly written prop", () => {
        const msg = "test message";
        const wrapper = shallowMount(Order, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });

    it('check if available masters is null',  async ()=> {
        expect(wrapper.vm.$data.available_masters).toBe(null)
    });


    it("check if admin is logged", () => {
        const wrapper = mount(Order, { store, localVue })
        expect(wrapper.find(".username").text()).toBe("admin")
    })
});


