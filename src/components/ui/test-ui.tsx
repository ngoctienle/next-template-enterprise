interface ITestProps {
  title: string
}

const TestUI: React.FC<ITestProps> = ({ title }) => {
  return <div>{title}</div>
}

export default TestUI
