 
const PackageImport = (props:any) => (
  <svg
    height={props.size} width={props.size} 
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 21-8-4.5v-9L12 3l8 4.5V12M12 12l8-4.5M12 12v9M12 12 4 7.5M22 18h-7M18 15l-3 3 3 3" />
  </svg>
)
export default PackageImport
