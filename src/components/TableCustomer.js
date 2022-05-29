import { Badge, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './deneme.css'

const TableCustomer = ( { customer } ) => {

    let navigate = useNavigate()


    //? İstenilen route'a kullanıcı idsi ile birlikte yönlendirme yapan fonksiyon.
    const routeChange = (id) => { 
      navigate(`/table-account-list/${id}`)
    }


    return (
        <div className = 'mb-5 mt-5 m-auto shadow p-3 mb-5 bg-white rounded'>
            <Table hover id='height'>
                <thead>
                    <tr>
                        <th className = 'w-20'>ID</th>
                        <th className = 'w-25'>First Name</th>
                        <th className = 'w-25'>Last Name</th>
                        <th className = 'w-25'>Email</th>
                        <th className = 'w-25'>Is Active</th>
                        <th className = 'w-25'>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        customer && customer?.map((item,key) => {
                            return(
                                <tr key={key} >
                                    <td> {key+1} </td>
                                    <td>
                                        <div className = 'd-flex align-items-center'>
                                        <img
                                            alt         =   'userimage'
                                            src         =   'https://mdbootstrap.com/img/new/avatars/2.jpg'
                                            style       =   {{widt:'45px', height:'45px'}}
                                            className   =   'rounded-circle'
                                            />
                                        <div className = 'ms-3'>
                                            <p className = 'fw-bold mb-1'>{item?.FirstName}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td> {item?.LastName} </td>
                                    <td> {item?.Email} </td>
                                    <td>
                                        {
                                            item?.IsActive ? (
                                                <Badge pill bg='success'>
                                                    Active
                                                </Badge>  
                                            ) : (
                                                <Badge pill bg='danger'>
                                                    Not Active
                                                </Badge>  
                                            )
                                        }
                                    </td>
                                    <td>  
                                        <button
                                                key         =   { key }
                                                id          =   { item?.CustomerId }
                                                type        =   'button'
                                                className   =   'btn btn-link btn-rounded btn-sm fw-bold'
                                                onClick     =   { (e) => routeChange(e.target.id) }
                                        >
                                                Detail
                                        </button> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
  )
}

export default TableCustomer