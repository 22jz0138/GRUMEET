import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

//ページネーションcomponentの実装　表示する件数目を指定

function ShopPagination ({shopdata,onvalue}) {
   const max_page = shopdata?.results?.results_available;
    const pagecount = Number(Math.ceil(max_page / 10 ));

    const handleChange = (event, value) => {
        onvalue(value);
    }
    return(
        <>
            <Pagination
            count = {pagecount}
            defaultPage = {1}
            boundaryCount = {1}
            onChange={handleChange}
            renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{ '&.Mui-selected': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)' 
                  },color: '#5c6bc0', Size: 'small', shape:'rounded', width:50, mb: 4 ,border:1}}
                />
              )}
            />
        </>
    )
}

export default ShopPagination;
