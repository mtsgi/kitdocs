$(document).on( "ready", () => {
    const _pid = 1;
    const PID = _pid;
    const DATA = App.data( _pid );
    for( let i of document.querySelector("#main").children ) {
        console.log( i );
        if( i.hasAttribute( "kit-e" ) ) {
            let _eqs = i.getAttribute( "kit-e" ).split( "," );
            for( let k of _eqs ) {
                let _eq = k.split( " " );
                $( i ).on( _eq[1] || "click", App.e[_pid][_eq[0]] );
            }
        }
        if( i.hasAttribute( "kit-text" ) ) {
            $( i ).text( eval( i.getAttribute( "kit-text" ) ) );
        }
        if( i.hasAttribute( "kit-html" ) ) {
            $( i ).html( eval( i.getAttribute( "kit-html" ) ) );
        }
        if( i.hasAttribute( "kit-bind" ) ) {
            if( App.d[_pid] == undefined ) App.d[_pid] = new Object();
            $( i ).on( 'keydown keyup keypress change', () => {
                App.d[_pid][i.getAttribute( "kit-bind" )] = i.value;
                $( `[kit-observe=${i.getAttribute( "kit-bind" )}]` ).text( i.value );
            } );
        }
        if( i.hasAttribute( "kit-observe" ) ) {
            $( i ).text( App.d[_pid][i.getAttribute( "kit-observe" )] );
        }
    }
} );

const App = new function() {

    this.d = new Object();

    this.data = ( _pid, _name, _value ) => {
        if( _value !== undefined ) {
            $(`[kit-bind=${_name}]`).val( _value );
            $(`[kit-observe=${_name}]`).text( _value );
            return App.d[_pid][_name] = _value;
        }
        else if( _name ) return App.d[_pid][_name];
        else return App.d[_pid];
    }

    this.e = new Object();

    this.event = ( _pid, _name, _event ) => {
        if( !App.e[_pid] ) App.e[_pid] = new Object();
        App.e[_pid][_name] = _event;
        return App;
    }
}