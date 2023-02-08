variable "api-gateway" {
  type = object({
    "api_endpoint"                 = string
    "api_key_selection_expression" = string
    "arn"                          = string
    "body"                         = tostring(null)
    "cors_configuration"           = tolist([])
    "credentials_arn"              = tostring(null)
    "description"                  = string
    "disable_execute_api_endpoint" = bool
    "execution_arn"                = string
    "fail_on_warnings"             = tobool(null)
    "id"                           = string
    "name"                         = string
    "protocol_type"                = string
    "route_key"                    = tostring(null)
    "route_selection_expression"   = string
    "tags"                         = tomap({})
    "tags_all"                     = tomap({})
    "target"                       = tostring(null)
    "version"                      = string
  })
}
