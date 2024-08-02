/**
 * @On(event = { "UPDATE" }, entity = "handover1722504817489Service.Customer")
 * @param {Object} req - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(req) {
    const { Customer } = cds.entities.handover1722504817489;

    // Extract the data from the request body
    const dataToUpdate = req.data;

    // Check if the data to update is defined
    if (!dataToUpdate) {
        req.error(400, "No data provided for update.");
        return;
    }

    // Extract the ID from the request to identify the record to update
    const { ID } = req.params;

    // Check if ID is provided
    if (!ID) {
        req.error(400, "No ID provided for the customer to update.");
        return;
    }

    // Perform the update operation
    try {
        const updateResult = await UPDATE(Customer)
            .set(dataToUpdate)
            .where({ ID: ID });

        // Check if any record was updated
        if (updateResult === 0) {
            req.error(404, `No customer found with ID ${ID} to update.`);
        }
    } catch (error) {
        req.error(500, `Error updating customer: ${error.message}`);
    }
}