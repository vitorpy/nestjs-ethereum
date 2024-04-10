import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as checksum from 'eth-checksum';

import { InvalidAddressChecksumError } from './InvalidAddressChecksumError';

@Injectable()
export class ValidationEthereumAddressPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!checksum.verify(value)) {
      throw new InvalidAddressChecksumError();
    }
    return value;
  }
}
