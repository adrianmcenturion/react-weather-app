
export const getDate = (dt) => {

    const date = (new Date ((dt) * 1000)).toLocaleString('en-US', {weekday: "long"})

  return (
    date
  )
}

export default getDate