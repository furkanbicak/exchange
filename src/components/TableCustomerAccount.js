import { Badge, Table } from 'react-bootstrap'
import Avatar from '../assets/avatar.jpeg'


const TableCustomerAccount = ( { customerAccount } ) => {

    
  return (
    <div className='mb-5 mt-5 m-auto shadow p-3 mb-5 bg-white rounded table-responsive'>
        <Table hover style={{ borderCollapse: "separate", borderSpacing:"0 20px"}}>
            <thead>
                <tr>
                    <th className = 'w-20'>ID</th>
                    <th className = 'w-20'>First Name</th>
                    <th className = 'w-20'>Last Name</th>
                    <th className = 'w-20'>Customer Id</th>
                    <th className = 'w-20'>Is Active</th>
                </tr>
            </thead>
            <tbody>
                {
                    customerAccount && customerAccount.length > 0 ? (
                        customerAccount && customerAccount?.map((item,key) => {
                            return(
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                alt         =   'userimage'
                                                src         =   { Avatar }
                                                style       =   { {widt:'45px', height:'45px'} }
                                                className   =   'rounded-circle'
                                            />
                                            <div className = 'ms-3'>
                                                <p className = 'fw-bold mb-1'>{item?.FirstName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.LastName}</td>
                                    <td>{item?.CustomerId}</td>
                                    <td>
                                        {
                                            item?.IsActive ? (
                                                <Badge pill bg='success'>Active</Badge>  
                                            ) : (
                                                <Badge pill bg='danger'>Not Active</Badge>  
                                            )
                                        }
                                    </td>  
                                </tr>
                            )
                        })
                    ) : (
                            <tr>
                                <td> 1 </td>
                                <td> <Badge bg='danger'>No Data!</Badge> </td>
                                <td> <Badge bg='danger'>No Data!</Badge> </td>
                                <td> <Badge bg='danger'>No Data!</Badge> </td>
                                <td> <Badge bg='danger'>No Data!</Badge> </td>
                            </tr>
                        )
                }
            </tbody>
        </Table>
    </div>
  )
}

export default TableCustomerAccount


