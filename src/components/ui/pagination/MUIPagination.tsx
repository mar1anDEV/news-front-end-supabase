import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function MUIPagination() {
  return (
    <div className="pagination p-4 my-2">
              <div className="w-fit mx-auto my-2">
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </div>
        </div>
  )
}

export default MUIPagination