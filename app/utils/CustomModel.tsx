import React, { FC } from 'react'
import {Box, Modal} from '@mui/material'

type Props = {
    open: boolean,
    setOpen: (open: boolean) => void,
    activeItem: any,
    component: any,
    setRoute?: (route: string) => void,
    refetch?:any
}

const CustomModel: FC<Props> = ({open, setOpen, setRoute, component:Component, refetch}) => {
  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box
            className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-zinc-900 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-zinc-950 shadow-zinc-200 rounded-[8px] p-4 outline-none'
        >
            <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
        </Box>
    </Modal>
  )
}

export default CustomModel