const { Customer } = cds.entities;

/**
 * @On(event = { "CREATE" }, entity = "handover1722504817489Service.Customer")
 * @param {Object} req - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(req) {
    const { data } = req;
    
    // Check if the necessary fields are provided
    if (!data.Name || !data.Email) {
        req.error(400, "Name and Email must be provided");
        return;
    }

    // Insert the new customer record into the database
    try {
        await INSERT.into(Customer).columns('Name', 'Email').values(data.Name, data.Email);
        req.info(`Customer created with Name: ${data.Name} and Email: ${data.Email}`);
    } catch (error) {
        req.error(500, `Error inserting customer: ${error.message}`);
    }
}