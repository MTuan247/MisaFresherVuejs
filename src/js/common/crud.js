import axios from 'axios'
import {formatDataInput} from '../../js/common/format'
var $ = require('jquery')

export function getDataById(id) {
    axios.get('http://cukcuk.manhnv.net/v1/Employees/' + id )
    .then((response) => {
        let res = response.data
        $('.info-form .field-label').each((index, item) => {
            let fieldName = $(item).attr('fieldName')
            let fieldType = $(item).attr('fieldType')
            let value =res[fieldName]
            value = formatDataInput(value, fieldType)
            
            $(item).find('input').val(value)
            $(item).trigger('focusout')
        })
    })
}