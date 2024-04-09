import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as checksum from 'eth-checksum';

@Injectable()
export class ValidationEthereumAddressPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        checksum.verify(value);
        return value;
    }
}
