import { rule } from '../../index';
import { colors, fonts } from './variables';

// set html styles
rule('html', {
    height: '100%'
});

// set default body styles
rule('body', {
    fontSize: fonts.baseSize,
    margin: 0,
    padding: 0,
    height: '100%',
    backgroundColor: colors.bgColor,
    color: colors.primary
});
