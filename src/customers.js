import React, {useState, useEffect} from 'react';
import './customers.css';

function Movies(){

    const initialValues = {customerID: null, customerFirstName: null, customerLastName: null}
    const [customer, setCustomer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [values, setValues] = useState(initialValues);
    const [customerPicked, setCustomerPicked] = useState(false);
    const [customerDetail, setCustomerDetail] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };

    useEffect(() =>{
        if(values.customerID=="") values.movieTitle=null;
        if(values.customerFirstName=="") values.actorFirstName=null;
        if(values.customerLastName=="") values.actorLastName=null;
        searchInput(values.customerID, values.customerFirstName, values.customerLastName);
    },[values]);
    
    const searchInput = (customerID, customerFirstName, customerLastName) =>{
        setLoaded(false);
        fetch(`http://localhost:8000/customers/${customerID}&${customerFirstName}&${customerLastName}`)
        .then(response => response.json())
        .then((customer) => {
            setCustomer(customer);
            setLoaded(true);
        })
    };

    const customerClick = (customerName) => {
        setLoaded(false);
        fetch(`http://localhost:8000/customer/${customerName}`)
        .then(response => response.json())
        .then((customerDetail) => {
            setCustomerDetail(customerDetail);
            setLoaded(true);
            setCustomerPicked(true);
        })
    };

    const clickClose = () =>{
        setLoaded(false);
        setCustomerPicked(false);
    }

    return(
        <>
            <div class="search-container">
                <input type="text" placeholder="Customer ID" class="search-bar" value={values.customerID} name="customerID"
                    onChange={handleChange}></input>

                <input type="text" placeholder="Customer First Name" class="search-bar" value={values.customerFirstName} name="customerFirstName"
                    onChange={handleChange}></input>

                <input type="text" placeholder="Customer Last Name" class="search-bar" value={values.customerLastName} name="customerLastName"
                    onChange={handleChange}></input>
            </div>

            {loaded && (
                <div class="container" onClick={clickClose}>
                    <table>
                        <th>Customer ID</th>
                        <th>Customer First Name</th>
                        <th>Customer Last Name</th>
                        {customer.map((customerD, customerI ) => (
                            <tr key={customerI}
                            onClick={(e) => customerClick(customerD.customer_id)}>
                                <td>{customerD.customer_id}</td>
                                <td>{customerD.first_name}</td>
                                <td>{customerD.last_name}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
            {(loaded && customerPicked) && (
                <div class="popup-container" onClick={clickClose}>
                    <div class="popup">
                        <table>
                            <th colSpan="100%">Customer Details</th>
                            {customerDetail.map((customerD, customerI ) => (
                                <tbody>
                                    <tr>
                                        <td>Customer ID:</td>
                                        <td>{customerD.customer_id}</td>
                                    </tr>
                                    <tr>
                                        <td>Customer First Name:</td>
                                        <td>{customerD.first_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Last Name:</td>
                                        <td>{customerD.last_name}m</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Email:</td>
                                        <td>{customerD.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Creation Date:</td>
                                        <td>{customerD.create_date}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
export default Movies;