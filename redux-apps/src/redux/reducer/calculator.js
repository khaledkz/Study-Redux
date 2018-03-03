export default function (
    state = { formula: '',operator:'', total: 0, screenresult: '',
     start: true, result: 0, secTotal: 0 ,firstSub:true}, action
) {
    if (state.start) {

        switch (action.type) {
            case 'number':
                let screenresult='',result=0;
                    screenresult = state.screenresult + action.number
                let formula = state.formula + action.number
                return Object.assign({}, state, { screenresult, formula,result });

            case '+':
                let total = Number(state.screenresult) + Number(state.total);
                formula = state.formula + '+';
                screenresult = '';
                return Object.assign({}, state, { formula, total, screenresult,operator:'+' }); 

            case '*':
                if (state.total === 0) {
                    total = Number(state.screenresult) * 1;
                    formula = state.formula + '*';
                    screenresult = '';
                    return Object.assign({}, state, { formula, total, screenresult,operator:'*' });

                } else {
                     
                    total = Number(state.screenresult) * Number(state.total);
                    formula = state.formula + '*';
                    screenresult = '';
                    return Object.assign({}, state, { formula, total, screenresult });

                }


            case '-':
                if(state.firstSub){
                    total = Number(state.screenresult) - Number(state.total);
                }else{
                    total = Number(state.total) - Number(state.screenresult);
                }
                formula = state.formula + '-';
                screenresult = '';
                return Object.assign({}, state, { formula, total, screenresult,firstSub:false,operator:'-' });

            case '=':
                switch(state.operator){
                    
                    case '+':
                      total = Number(state.screenresult) + Number(state.total);
                      break;

                    case '*':
                      total = Number(state.screenresult) * Number(state.total);
                      break;

                    case '-':
                    total = Number(state.total) - Number(state.screenresult);
                      break;
                    default:
                    return state;
                }
                 screenresult = '';
                  result = total;
                return Object.assign({}, state, { total, screenresult, start: false, formula: '', result });
            case 'c':
                return Object.assign({}, state, { formula: '', total: 0, screenresult: '', start: true, result: 0, secTotal: 0 });
            default:
                return state;
        }
    } else if (!state.start) {
         switch (action.type) {
            case 'number':
                let formula = state.formula + action.number
                let screenresult = state.screenresult + action.number;
                return Object.assign({}, state, { screenresult, formula, result: 0, total: 0,secTotal:0 });

            case '+':
                let secTotal = Number(state.screenresult) + Number(state.secTotal);
                formula = state.formula + '+';
                 screenresult = ''
                return Object.assign({}, state, { formula, secTotal, screenresult });

            case '*':
                if (state.secTotal === 0) {
                      secTotal = Number(state.screenresult) * 1;

                } else {
                    secTotal = Number(state.screenresult) * Number(state.secTotal);

                }
                formula = state.formula + '*';
                screenresult = ''
                return Object.assign({}, state, { formula, secTotal, screenresult });

            case '-':
                secTotal = Number(state.screenresult) - Number(state.secTotal);
                formula = state.formula + '-';
                screenresult = ''
                return Object.assign({}, state, { formula, secTotal, screenresult });

            case '=':

            switch(state.operator){
                    
                case '+':
                   secTotal = Number(state.screenresult) + Number(state.secTotal);
                   break;

                case '*':
                   secTotal = Number(state.screenresult) * Number(state.secTotal);
                   break;
                default:
                return state;

            }
                 screenresult = '';
                let result = secTotal;
                return Object.assign({}, state, { total: 0, secTotal: 0, screenresult, start: true, formula: '', result });

            case 'c':
                return Object.assign({}, state, { formula: '', total: 0, screenresult: '', start: true, result: 0, secTotal: 0 });

            default:
                return state;
        }
    }
}




