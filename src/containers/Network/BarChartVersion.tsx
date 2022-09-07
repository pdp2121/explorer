import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps,
  Label,
} from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent'
import './css/barchart.scss'

interface Props {
  data: any[]
}

interface BarCoordinates {
  x: number
  y: number
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  const { t } = useTranslation()
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{t('version_display', { version: label })}</p>
        <p className="value">
          {t('nodes_count', { count: payload?.[0].payload.count })}
        </p>
      </div>
    )
  }
  return null
}

const BarChartVersion = (props: Props) => {
  const { data } = props
  const { t } = useTranslation()
  const [posData, setposData] = useState<BarCoordinates>({ x: 0, y: 0 })
  return (
    <div className="barchart">
      <BarChart
        data={data}
        width={1075}
        height={532}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <XAxis
          dataKey="label"
          angle={-65}
          dy={30}
          dx={-7}
          height={90}
          tickLine={false}
          stroke="#9BA2B0"
        />
        <YAxis
          className="yAxis"
          tickLine={false}
          tickFormatter={(tick) => `${tick}%`}
          stroke="#9BA2B0"
        >
          <Label
            className="yLabel"
            value={t('% of total nodes')}
            angle={-90}
            position="insideTop"
            dx={45}
            dy={65}
          />
        </YAxis>
        <Bar
          dataKey="value"
          barSize={30}
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
          onMouseOver={(dataY) => {
            setposData({ x: dataY.x, y: dataY.y })
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          position={{ x: posData.x - 45, y: posData.y - 90 }}
          offset={-10}
        />
      </BarChart>
    </div>
  )
}

export default BarChartVersion
