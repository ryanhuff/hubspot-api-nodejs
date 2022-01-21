import { createConfiguration } from '../../../../codegen/crm/timeline/configuration'
import {
  EventsApi,
  RequestContext,
  ResponseContext,
  TemplatesApi,
  TokensApi,
} from '../../../../codegen/crm/timeline/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class TimelineDiscovery extends BaseDiscovery {
  public eventsApi: EventsApi
  public templatesApi: TemplatesApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.eventsApi = new EventsApi(configuration)
    this.templatesApi = new TemplatesApi(configuration)
    this.tokensApi = new TokensApi(configuration)
  }
}
