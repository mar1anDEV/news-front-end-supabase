import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


interface Props {
    minValue?: number,
    maxValue ?: number,
    defaultValue?: number,
}

function PriceRange({minValue,maxValue,defaultValue}:Props) {
  return (
    <div className='mt-4'>
        <Box sx={{ width: '100%' }}>
        <Slider
        sx={{
    color: '#2563eb', 
  }}
        defaultValue={defaultValue} min={minValue} max={maxValue} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    </div>
  )
}
export default PriceRange