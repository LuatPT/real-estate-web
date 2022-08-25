import { Typography } from '@mui/material'

export default function BubbleSpan() {
  return (
    <Typography
      sx={{
        fontSize: '15px',
        lineHeight: '30px',
        color: '#fff',
        fontWeight: '700',
        display: 'flex',
        opacity: '1',
        alignItems: 'center',
        flexFlow: 'column',
        position: 'absolute',
        bottom: '12px',
        left: '15px',
        transition: 'all 0.4s ease-in-out',
      }}
      className="count"
      variant="span"
    >
      17
      <Typography
        sx={{
          display: 'inline-block',
          fontSize: '13px',
          padding: '0 10px',
          lineHeight: '26px',
          borderRadius: '3px',
          background: '#ff4a26',
          fontWeight: 400,
          opacity: 0,
          color: '#fff',
          transform: 'translateY(50px)',
          transition: ' all 0.4s ease-in-out',
        }}
        variant="span"
      >
        Dự án
      </Typography>
    </Typography>
  )
}
