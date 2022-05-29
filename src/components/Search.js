import { CloseButton, Form } from 'react-bootstrap'

const Search = ( { setCustomer, searchData } ) => {


    //? Tablodaki tüm verilere göre arama yapan fonksiyon.
    function generalSearch(e) {
        e = e.toLocaleLowerCase('tr');
        let newArr = [];
        searchData.forEach(element => {
            for(let i in element){
                
                //? string ifadeler karşılaştırıldı ve bitti.
                if (element[i] != null && element[i].toString().toLowerCase().includes(e.toString().toLowerCase())) {
                        if (!newArr.includes(element)) {
                            newArr.push(element)
                        }
                        setCustomer(newArr)                                    
                } 
            }
        });
    }


    //? Tablodaki müşteri ismine göre arama yapan fonksiyon.
    const searchCountries = (e) => {
        e = e.toLocaleLowerCase('tr');
        if(e === ''){
            return setCustomer(searchData)
        } else {
            const filterResult = searchData.filter(item => {
                return(
                    item.FirstName?.toLowerCase().includes(e.toLowerCase())
                )
            })
            setCustomer(filterResult)
        }
    }
    

  return (
      
    <div className = 'shadow-lg p-3 mb-5 bg-white rounded'>  
        <div className = 'd-flex justify-content-end'>
            <CloseButton />
        </div>
        <div className = 'd-flex justify-content-center row mb-4' style={{gap:'100px'}}>
            <div className = 'col-md-5'>
                <Form.Label className = 'text-primary'> Name </Form.Label>
                <Form.Control 
                    size        =   'lg'
                    type        =   'text' 
                    placeholder =   'Name Search...'
                    onChange    =   { (e) => searchCountries(e.target.value) } 
                />
            </div>

            <div className = 'col-md-5'>
                <Form.Label className = 'text-primary'> General Search </Form.Label>
                <Form.Control 
                    size        =   'lg'
                    type        =   'text' 
                    placeholder =   'General Search...'
                    onChange    =   { (e) => generalSearch(e.target.value) } 
                />
            </div>
        </div>
    </div>
  )
}

export default Search