import AjaxComponent from '../base/ajaxComponent';
import PlaceFilter from './placeFilter';

export default class EventFilterComponent extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {places:[]};
        // TODO: Buscar locais e filtrar
        this.filterParams = {selectedDate:null, places:[]};


        this.loadApi("places", (err, items)=>{
            this.setState({places:items});
        });
    }

    componentDidMount(){
        $(".datepicker").datepicker(
            {
                format: "dd/mm/yyyy",
    			todayBtn: true,
    			language: "pt-BR",
    			maxViewMode:2,
    			clearBtn:true,
    			autoclose: true,
            }
        )
        .on('changeDate', function (e){
            this.filter({selectedDate:e.date || ""});
        }.bind(this));
    }

    filter(params){
        if(params){
            if(params.place){
                if(params.remove){
                    this.filterParams.places = this.filterParams.places.filter((item)=> item.toUpperCase() != params.place.toUpperCase());
                } else
                    this.filterParams.places.push(params.place);
            }


            if(params.selectedDate || params.selectedDate == ""){
                if(params.selectedDate != ""){
                    if(!(params.selectedDate instanceof Date)){
                        params.selectedDate = new Date(params.selectedDate);
                    }
                    let date = params.selectedDate.getFullYear() + ("0"+(parseInt(params.selectedDate.getMonth())+1)).slice(-2) + ("0"+params.selectedDate.getDate()).slice(-2);
                    this.filterParams.selectedDate = date;
                } else {
                    this.filterParams.selectedDate = "";
                }
            }
        }
        this.props.filterCallback(this.filterParams);
    }


    render(){
        let places = this.state.places.map(
                (place) =>
                    <PlaceFilter key={place.id} name={place.place_name} name_sanitized={place.place_name_sanitized} filter={this.filter.bind(this)} />
            );
        return (
            <div className="col-xs-4 col-sm-2">
                <h3 className="text-uppercase text-center">Filtrar</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="input-group date datepicker">
                            <input type="text" value={this.state.formatedDate} className="form-control" placeholder="Data" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                        </div>
                    </div>
                </div>
                    <div className="row filter">
                        <div className="col-xs-12">
                            <h4 className="text-uppercase text-center">Local</h4>
                            <ul className="list-unstyled place-filter">
                                {places}
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }

}
