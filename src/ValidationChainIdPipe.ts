import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import * as chainlist from 'eth-chainlist';

import { InvalidChainIdError } from './InvalidChainIdError';

@Injectable()
export class ValidationChainIdPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (!chainlist.getChainById(value)) {
      throw new InvalidChainIdError();
    }
    return value;
  }
}

