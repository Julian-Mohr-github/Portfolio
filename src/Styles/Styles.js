const getDesignTokens = (mode)=>({
    palette:{
        mode: mode
    },
    components:{
        //name of the components
        MuiContainer:{
            variants: [
                {
                  props: { variant: 'NewComponent' },
                  style: {
                    marginTop: '40px',
                    marginBottom: '40px',
                  },

            }
               
        ]      
        }
    }
})

export default getDesignTokens;