import './App.css'
import AppBar_ from './components/core/AppBar_'
import Button_ from './components/core/Button_'
import Enable from './components/Enable'
import Form_ from './components/core/Form_'
import TextField_ from './components/core/TextField_'
import Typography_ from './components/core/Typography_'
import Card_ from './components/core/Card_'
import Test from './components/Test'
import Dialog_ from './components/core/Dialog_'
import Modal_ from './components/core/Modal_'
import FormValidate_ from './components/core/FormValidate_'
import DataGrid_ from './components/core/DataGrid_'

function App() {
  return (
    <>
      <Enable>
        {/* Part5: 7: Form Validation react-hook */}
        <FormValidate_ />
        {/* Part5: 7: Form Validation react-hook */}
        <DataGrid_ />
        {/* Part5: 7: Form Validation react-hook */}
        {/* <FormValidate_ /> */}
      </Enable>

      {/* Part4: 6: Advance Components */}
      <Enable off>
        <Card_ />
        <Dialog_ />
        <Modal_ />
      </Enable>

      {/* Part3: 5: Header Navigation Bar */}
      <Enable off>
        <AppBar_ />
      </Enable>

      {/* Part2: 4: Form Handling*/}
      <Enable off>
        <Form_ />
      </Enable>

      {/* Part1: 1 2 3 */}
      <Enable off>
        <Typography_ />
        <Button_ />
        <TextField_ />
      </Enable>
    </>
  )
}

export default App
