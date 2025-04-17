import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FamilyTree from './components/FamilyTree/FamilyTree'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        {/* <SimpleForm></SimpleForm>
        <FormAction></FormAction>
        <ControlledField></ControlledField>
        <UnControlledField></UnControlledField>
        <HookForm></HookForm> */}
        {/* <ProductManagement></ProductManagement> */}
        <FamilyTree></FamilyTree>
      </div>
    </>
  )
}

export default App
