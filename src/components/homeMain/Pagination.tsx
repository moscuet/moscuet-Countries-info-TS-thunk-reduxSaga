import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface FunctProps {
  resetPage(arg:number):void,
  dataSize:number
}
const PaginationControlled : React.FC<FunctProps>= (props) => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event:any, value:any):void => {
    setPage(value);
    props.resetPage(value)
  };
 const count = Math.ceil(props.dataSize/10)
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default PaginationControlled