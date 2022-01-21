import { createConfiguration } from '../../../../../codegen/crm/extensions/calling/configuration'
import { RequestContext, ResponseContext, SettingsApi } from '../../../../../codegen/crm/extensions/calling/index'
import { IConfiguration } from '../../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class CallingDiscovery extends BaseDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.settingsApi = new SettingsApi(configuration)
  }
}
