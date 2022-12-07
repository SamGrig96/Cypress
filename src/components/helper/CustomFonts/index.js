import { Global } from '@mantine/core';
import bold from '../../fonts/Poppins-Bold.ttf';
import semiBold from '../../fonts/Poppins-SemiBold.ttf';
import reguliar from '../../fonts/Poppins-Regular.ttf';
import normal from '../../fonts/Poppins-Black.ttf';

const CustomFonts=()=> {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'PoppinsBold',
                        src: `url('${bold}') format("ttf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PoppinsSemiBold',
                        src: `url('${semiBold}') format("ttf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'PoppinsReguliar',
                        src: `url('${reguliar}') format("ttf")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Poppins',
                        src: `url('${normal}') format("ttf")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}
export default CustomFonts