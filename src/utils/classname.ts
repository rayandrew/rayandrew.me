function classname(
  value: string,
  ...args: (string | undefined | null)[]
): string {
  const additionals =
    args.length > 0
      ? `${args.reduce((values, arg) => {
          values += arg ? ` ${arg}` : ''
          return values
        }, '')}`
      : ''
  return `${value}${additionals}`
}

export default classname
