import 'moment';
export class MomentValueConverter {
    toView(value, format) {
        return moment(value).format(format);
    }
}
//# sourceMappingURL=DateToTimeConverter.js.map