/**
 * Code is auto-generated by Application Logic, DO NOT EDIT.
 * @version(2.0)
 */
const LCAPApplicationService = require('@sap/low-code-event-handler');
const customerCreate = require('./code/customerCreate');
const customerUpdate = require('./code/customerUpdate');

class handover1722504817489Service extends LCAPApplicationService {
    async init() {

        this.on('CREATE', 'Customer', async (request, next) => {
            await customerCreate(request);
            return next();
        });

        this.on('UPDATE', 'Customer', async (request, next) => {
            await customerUpdate(request);
            return next();
        });

        return super.init();
    }
}


module.exports = {
    handover1722504817489Service
};