// import React, { useState } from 'react'
// import Button from '../../FormComp/Button';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = () => {

//     let navigate = useNavigate();
//     let [searchQuery, setSearchQuery] = useState('');

//     const handlerSearch = (e) => {
//         console.log('search form submit!')
//         e.preventDefault();
//         // setSearchQuery(e.target.value)
//         console.log('searchQuery', searchQuery, typeof searchQuery)
//         if (!searchQuery || searchQuery.length <= 0) {
//             alert('Search Box Can not be empty!');
//         }
//         else {   
//             navigate(`/search-listing?query=${searchQuery}`)
//             setSearchQuery('')
//         }
//     }

//     return (
//         <form onSubmit={handlerSearch} >
//             <div className='flex items-center' >

//                 <input type="text" name="search" id="search" placeholder='Search'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className='w-[100%] py-[10px] pl-[20px] font-inter text-black-1c border-1 border-r-0 border-prim-blue placeholder-get-grey outline-0 rounded-bl-[6px] rounded-tl-[6px] '
//                 />
//                 <Button
//                     type="submit"
//                     additionalClass="rounded-bl-[0] rounded-tl-[0] py-[10px] px-[20px] "
//                     btnWidth="w-fit"
//                     text='Search'
//                 />

//             </div>
//         </form >
//     )
// }

// export default SearchBar;
